import { Input } from "@/common/Input/Input";
import { Label } from "@/common/Label/Label";

const AddAuthor = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="author-name">Author Name</Label>
        <Input
          id="author-name"
          placeholder="Enter author name"
        />
      </div>
    </div>
  );
};

export default AddAuthor;
