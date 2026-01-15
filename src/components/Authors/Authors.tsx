import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/common/Button/Button";
import Modal from "@/common/Modal/Modal";
import AddAuthor from "./AddAuthor";
import AuthorItem from "./AuthorItem";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { AppDispatch, selectAuthors } from "@/store/store";
import { fetchAuthors } from "@/store/author/author.thunk";

const Authors = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const authors = useSelector(selectAuthors);

  useEffect(() => {
    dispatch(fetchAuthors());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-3xl">Authors</CardTitle>
            <Button onClick={() => setShowModal(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Add Author
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {authors.length > 0 ? (
            authors.map((author) => <AuthorItem key={author.id} {...author} />)
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              No authors found
            </div>
          )}
        </CardContent>
      </Card>
      {showModal && (
        <Modal
          title="Add Author"
          open={showModal}
          handleClose={() => setShowModal(false)}
          handleSave={() => setShowModal(false)}
        >
          <AddAuthor />
        </Modal>
      )}
    </div>
  );
};

export default Authors;
