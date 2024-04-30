"use client";
import { Button } from "../ui/button";

const AddCommentForm = () => {
  return (
    <form className="my-2">
      <textarea
        className="w-full p-3 border-2 rounded-md bg-transparent outline-logo resize-none"
        placeholder="type your comment here..."
      ></textarea>
      <Button variant="themeBased" size={"lg"} className="mt-2">
        Add Comment
      </Button>
    </form>
  );
};

export default AddCommentForm;
