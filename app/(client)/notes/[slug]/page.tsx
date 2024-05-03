import Image from "next/image";
import imageSrc from "@/assets/note-icon.svg";
import { Button } from "@/components/ui/button";
import { FaDownload, FaThumbsDown, FaThumbsUp } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import AddCommentForm from "@/components/forms/add-comment";

const SignleNotePage = () => {
  return (
    <main className="my-2">
      <div className="flex gap-2 flex-col lg:flex-row lg:items-center">
        <Image src={imageSrc} width={200} alt="Note title" />
        <div>
          <h1 className="text-xl">
            Elementry Physics <Badge variant={"success"}>trusted</Badge>
          </h1>
          <p className="my-2 text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            architecto, nesciunt ducimus aperiam distinctio error quis
            doloremque sunt fuga dolorem tempora esse aspernatur assumenda
            beatae nisi ratione dolor quam similique!
          </p>
          <p className="text-sm text-muted-foreground">
            Uploaded by theshanumalik at 12 april 2014
          </p>
        </div>
      </div>
      <div className="flex gap-2 justify-end">
        <Button
          variant={"outline"}
          className="flex items-center justify-center gap-1 bg-transparent"
        >
          <span>12</span> <FaThumbsUp />
        </Button>
        <Button
          variant={"outline"}
          className="flex items-center justify-center gap-1 bg-transparent"
        >
          <span>5</span> <FaThumbsDown />
        </Button>
        <Button variant={"themeBased"}>
          <FaDownload className="mr-1" />
          Download
        </Button>
      </div>

      <hr className="my-3" />
      <h2 className="font-semibold text-lg">Comments</h2>
      <AddCommentForm />
    </main>
  );
};

export default SignleNotePage;
