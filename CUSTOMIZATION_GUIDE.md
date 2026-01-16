# Customization Guide

This guide shows you how to customize the shadcn/ui components and theme for your specific needs.

## 🎨 Changing the Theme

### Primary Color

Edit `src/index.css` and change the `--primary` HSL values:

```css
:root {
  --primary: 221.2 83.2% 53.3%; /* Default blue */
  /* Try these alternatives: */
  /* --primary: 142.1 76.2% 36.3%; Green */
  /* --primary: 262.1 83.3% 57.8%; Purple */
  /* --primary: 346.8 77.2% 49.8%; Red/Pink */
}
```

### Border Radius

Make corners more or less rounded:

```css
:root {
  --radius: 0.5rem; /* Default */
  /* --radius: 0rem; Square corners */
  /* --radius: 1rem; Very rounded */
}
```

### Custom Colors

Add your brand colors:

```css
:root {
  --brand-blue: 210 100% 50%;
  --brand-orange: 25 95% 53%;
}
```

Then use in Tailwind:

```tsx
<div className="bg-[hsl(var(--brand-blue))]">Content</div>
```

## 🔧 Component Customization

### Button Variants

Add new button variants in `src/components/ui/button.tsx`:

```tsx
const buttonVariants = cva(
  // ...existing code...
  {
    variants: {
      variant: {
        // ...existing variants...
        success: "bg-green-600 text-white hover:bg-green-700",
        warning: "bg-yellow-600 text-white hover:bg-yellow-700",
      },
      // ...existing code...
    },
  }
)
```

Usage:
```tsx
<Button variant="success">Save</Button>
```

### Card Styles

Customize card appearance in `src/components/ui/Card.tsx`:

```tsx
// Add elevated variant
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { elevated?: boolean }
>(({ className, elevated, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      elevated && "shadow-lg hover:shadow-xl transition-shadow",
      className
    )}
    {...props}
  />
))
```

### Input Sizes

Add size variants to inputs in `src/components/ui/Input.tsx`:

```tsx
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: "sm" | "md" | "lg"
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, inputSize = "md", ...props }, ref) => {
    const sizeClasses = {
      sm: "h-8 text-sm",
      md: "h-10 text-sm",
      lg: "h-12 text-base",
    }
    
    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-md border...",
          sizeClasses[inputSize],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
```

## 🌗 Implementing Dark Mode

### 1. Add Theme Provider

Create `src/components/theme-provider.tsx`:

```tsx
import React, { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

const ThemeContext = createContext<{
  theme: Theme
  setTheme: (theme: Theme) => void
}>({
  theme: "system",
  setTheme: () => null,
})

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "ui-theme",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"
      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")
  return context
}
```

### 2. Wrap App with Provider

In `src/main.tsx`:

```tsx
import { ThemeProvider } from "./components/theme-provider"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="course-app-theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
```

### 3. Add Theme Toggle Button

Create `src/components/theme-toggle.tsx`:

```tsx
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "./theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
```

### 4. Add to Header

In `src/components/Header/Header.tsx`:

```tsx
import { ThemeToggle } from "../theme-toggle"

const Header: React.FC = () => {
  return (
    <header className="border-b bg-card">
      <div className="container mx-auto flex justify-between items-center h-16 px-6">
        <Logo />
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Profile />
        </div>
      </div>
    </header>
  )
}
```

## 📦 Adding New shadcn Components

### Method 1: Manual Addition

1. Visit https://ui.shadcn.com/docs/components
2. Find the component you want (e.g., "Badge")
3. Copy the code to `src/components/ui/badge.tsx`
4. Install any additional dependencies listed
5. Use the component

### Method 2: CLI (Recommended)

If you want to use the official CLI:

```bash
# Install shadcn CLI globally
npm install -g shadcn-ui

# Add components
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add toast
```

### Popular Components to Add

**Badge** - For status indicators:
```tsx
<Badge variant="secondary">New</Badge>
<Badge variant="destructive">Error</Badge>
```

**Select** - Better dropdown (replaces react-select):
```tsx
<Select onValueChange={setValue}>
  <SelectTrigger>
    <SelectValue placeholder="Select..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
  </SelectContent>
</Select>
```

**Toast** - Notifications:
```tsx
toast({
  title: "Success!",
  description: "Course created successfully",
})
```

**Skeleton** - Loading states:
```tsx
<Skeleton className="h-12 w-full" />
```

## 🎭 Animation Customization

Modify animations in `tailwind.config.js`:

```js
theme: {
  extend: {
    keyframes: {
      "slide-in": {
        "0%": { transform: "translateX(-100%)" },
        "100%": { transform: "translateX(0)" },
      },
    },
    animation: {
      "slide-in": "slide-in 0.3s ease-out",
    },
  },
},
```

Use in components:
```tsx
<div className="animate-slide-in">Content</div>
```

## 🔤 Typography Customization

Add custom fonts in `tailwind.config.js`:

```js
theme: {
  extend: {
    fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
      heading: ["Poppins", "sans-serif"],
    },
  },
},
```

Then in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700&display=swap');

body {
  font-family: theme('fontFamily.sans');
}

h1, h2, h3, h4, h5, h6 {
  font-family: theme('fontFamily.heading');
}
```

## 📱 Responsive Breakpoints

Customize breakpoints in `tailwind.config.js`:

```js
theme: {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
      // Add custom breakpoints
      "3xl": "1600px",
    },
  },
},
```

## 🎯 Form Validation with Zod

Add schema validation:

```bash
npm install zod @hookform/resolvers
```

Example in CreateCourse:

```tsx
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const courseSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  duration: z.number().min(1, "Duration must be positive"),
  description: z.string().min(10, "Description too short"),
  authors: z.array(z.string()).min(1, "Select at least one author"),
})

const { register, handleSubmit } = useForm({
  resolver: zodResolver(courseSchema),
})
```

## 🔍 Custom Utilities

Add helper functions to `src/lib/utils.ts`:

```tsx
export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date))
}

export function truncate(str: string, length: number) {
  return str.length > length ? str.slice(0, length) + "..." : str
}
```

## 📊 Adding Charts

For data visualization, add Recharts:

```bash
npm install recharts
```

Create chart components using Card containers for consistency.

## 🚀 Performance Tips

1. **Lazy load routes:**
```tsx
const CreateCourse = lazy(() => import("./components/CreateCourse/CreateCourse"))
```

2. **Optimize imports:**
```tsx
// Instead of importing entire icon library
import { User, LogOut } from "lucide-react"
```

3. **Memoize expensive calculations:**
```tsx
const filteredCourses = useMemo(
  () => courses.filter(c => c.title.includes(keyword)),
  [courses, keyword]
)
```

## 📝 Best Practices

1. **Always use semantic variants:** `variant="destructive"` instead of custom red colors
2. **Maintain consistency:** Use the same patterns across components
3. **Leverage the theme:** Use CSS variables instead of hardcoded colors
4. **Test accessibility:** Always test keyboard navigation and screen readers
5. **Keep components small:** Break down large components into smaller pieces
6. **Document custom additions:** Comment any modifications to shadcn components

---

For more information, visit:
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Radix UI Documentation](https://www.radix-ui.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)

