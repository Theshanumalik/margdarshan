import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import {
  FaDownload,
  FaEye,
  FaHandMiddleFinger,
  FaThumbsUp,
} from "react-icons/fa6";

type NotesCardProps = {
  title: string;
  description: string;
  course: string;
  semester: string;
  id: string | number;
};

const NotesCard = ({
  title,
  description,
  course,
  semester,
}: NotesCardProps) => {
  return (
    <Card className="p-3 col-span-6 md:col-span-3 lg:col-span-2">
      <CardTitle>
        {title}{" "}
        <Badge>
          {course} - {semester}
        </Badge>
      </CardTitle>
      <CardDescription>{description}</CardDescription>
      <div className="mt-3 flex justify-between items-center">
        <div className="flex gap-1">
          <Button variant={"outline"}>
            <FaThumbsUp />
          </Button>
          <Button variant={"outline"}>
            <FaHandMiddleFinger />
          </Button>
        </div>
        <div className="flex gap-1">
          <Button variant={"secondary"}>
            <FaEye />
          </Button>
          <Button variant={"themeBased"}>
            <FaDownload />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default NotesCard;
