import React from "react";
import { Button } from "@/common/Button/Button";
import { Author } from "@/types/author";
import { Edit, Trash2 } from "lucide-react";

const AuthorItem: React.FC<Author> = ({ name }) => {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
      <div className="font-medium">{name}</div>
      <div className="flex gap-2">
        <Button variant="outline" size="sm">
          <Edit className="h-4 w-4 mr-1" />
          Edit
        </Button>
        <Button variant="destructive" size="sm">
          <Trash2 className="h-4 w-4 mr-1" />
          Remove
        </Button>
      </div>
    </div>
  );
};

export default AuthorItem;
