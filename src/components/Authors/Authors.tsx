import { useEffect, useState } from "react";
import { Button } from "@/common/Button/Button";
import Modal from "@/common/Modal/Modal";
import AddAuthor from "./AddAuthor";
import AuthorItem from "./AuthorItem";
import { Author } from "@/types/author";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";

interface QueryAllAuthorsResp {
  successful: boolean;
  result: Author[];
}

const Authors = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [authors, setAuthors] = useState<Author[]>([]);

  const getAuthorList = async () => {
    const token = localStorage.getItem("token") ?? "";
    const fetchResp = await fetch("/api/authors/all", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });
    const jsonResp: QueryAllAuthorsResp = await fetchResp.json();
    if (jsonResp.successful) {
      setAuthors(jsonResp.result);
    }
  };

  useEffect(() => {
    getAuthorList();
  }, []);

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
