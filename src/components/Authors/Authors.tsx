import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/common/Button/Button";
import Modal from "@/common/Modal/Modal";
import AddAuthor, { AddAuthorHandle, AddAuthorFormValues } from "./AddAuthor";
import AuthorItem from "./AuthorItem";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { AppDispatch, selectAuthors } from "@/store/store";
import { createAuthor, fetchAuthors } from "@/store/author/author.thunk";

const Authors = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const formRef = useRef<AddAuthorHandle>(null);
  const dispatch = useDispatch<AppDispatch>();
  const authors = useSelector(selectAuthors);

  useEffect(() => {
    dispatch(fetchAuthors());
  }, [dispatch]);

  const handleModalClose = () => {
    if (isSaving) return;
    setShowModal(false);
    setSubmitError(null);
    formRef.current?.reset();
  };

  const handleSaveAuthor = () => {
    formRef.current?.submit();
  };

  const handleAddAuthorSubmit = async (values: AddAuthorFormValues) => {
    try {
      setIsSaving(true);
      setSubmitError(null);
      await dispatch(createAuthor(values.name));
      setIsSaving(false);
      setShowModal(false);
      formRef.current?.reset();
    } catch (error) {
      setIsSaving(false);
      const message = error instanceof Error ? error.message : "Failed to save author";
      setSubmitError(message);
    }
  };

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
          handleClose={handleModalClose}
          handleSave={handleSaveAuthor}
          saving={isSaving}
          disableSave={isSaving}
        >
          <AddAuthor
            ref={formRef}
            onSubmit={handleAddAuthorSubmit}
            isSubmitting={isSaving}
            submitError={submitError}
          />
        </Modal>
      )}
    </div>
  );
};

export default Authors;
