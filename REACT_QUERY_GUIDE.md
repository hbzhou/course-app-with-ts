# React Query Quick Reference

## Using Queries (GET requests)

### Fetching Data
```typescript
import { useCourses } from "@/hooks/useCourses";

const MyComponent = () => {
  const { data, isLoading, error } = useCourses();
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return <div>{data.map(course => ...)}</div>;
};
```

### Available Queries
- `useCourses()` - Fetch all courses
- `useAuthors()` - Fetch all authors

## Using Mutations (POST, PUT, DELETE)

### Basic Mutation
```typescript
import { useCreateCourse } from "@/hooks/useCourses";

const MyComponent = () => {
  const createMutation = useCreateCourse();
  
  const handleCreate = async () => {
    try {
      await createMutation.mutateAsync(courseData);
      // Success! Query cache is automatically invalidated
    } catch (error) {
      // Handle error
    }
  };
  
  return (
    <button 
      onClick={handleCreate}
      disabled={createMutation.isPending}
    >
      {createMutation.isPending ? "Creating..." : "Create"}
    </button>
  );
};
```

### Available Mutations

#### Courses
- `useCreateCourse()` - Create a new course
- `useUpdateCourse()` - Update existing course
- `useDeleteCourse()` - Delete a course

#### Authors
- `useCreateAuthor()` - Create a new author
- `useUpdateAuthor()` - Update existing author
- `useDeleteAuthor()` - Delete an author

#### Auth
- `useLogin()` - Login user
- `useRegister()` - Register new user
- `useLogout()` - Logout user

## Mutation States

All mutations provide these properties:
- `isPending` - Mutation is in progress
- `isError` - Mutation failed
- `isSuccess` - Mutation succeeded
- `error` - Error object if failed
- `mutate()` - Fire and forget
- `mutateAsync()` - Returns promise (use with async/await)

## React Query DevTools

In development mode, open the DevTools by clicking the icon in the bottom-left corner.

Features:
- View all queries and their states
- Inspect cache data
- See query timeline
- Manually refetch or invalidate queries
- View network activity

## Common Patterns

### Show Loading State
```typescript
const { data, isLoading } = useCourses();

if (isLoading) {
  return <Spinner />;
}
```

### Handle Errors
```typescript
const { data, error } = useCourses();

if (error) {
  return <ErrorMessage error={error.message} />;
}
```

### Disable Button During Mutation
```typescript
const mutation = useCreateCourse();

<button disabled={mutation.isPending}>
  {mutation.isPending ? "Saving..." : "Save"}
</button>
```

### Error Handling in Mutations
```typescript
const mutation = useCreateCourse();
const [errorMsg, setErrorMsg] = useState(null);

const handleSubmit = async (data) => {
  try {
    setErrorMsg(null);
    await mutation.mutateAsync(data);
    // Success
  } catch (error) {
    setErrorMsg(error.message);
  }
};
```

## Query Configuration

Queries have default configuration:
- `staleTime: 5 minutes` - Data is fresh for 5 minutes
- `retry: 1` - Retry failed requests once
- `refetchOnWindowFocus: false` - Don't refetch on window focus

Override per query:
```typescript
const { data } = useCourses({
  staleTime: 10 * 60 * 1000, // 10 minutes
  retry: 3,
});
```

## Manual Cache Invalidation

```typescript
import { useQueryClient } from "@tanstack/react-query";

const queryClient = useQueryClient();

// Invalidate specific query
queryClient.invalidateQueries({ queryKey: ["courses"] });

// Invalidate all queries
queryClient.invalidateQueries();

// Clear all cache
queryClient.clear();
```

## Tips

1. **Use `mutateAsync` with async/await** - Better error handling
2. **Always handle errors** - Show user feedback
3. **Use loading states** - Improve UX with disabled buttons
4. **Let React Query handle caching** - Don't manually refetch
5. **Cache is automatically updated** - After mutations via invalidation
6. **Use DevTools** - Debug query states and cache

## Troubleshooting

### Data not updating after mutation
✅ Mutations automatically invalidate related queries
✅ Check that query keys match

### Queries refetching too often
✅ Increase `staleTime` in query config
✅ Check `refetchOnWindowFocus` setting

### Authentication errors
✅ Token is stored in localStorage
✅ Automatically added to requests via `apiClient`

### Network errors
✅ Check API proxy in `vite.config.ts`
✅ Ensure backend is running on port 8081
