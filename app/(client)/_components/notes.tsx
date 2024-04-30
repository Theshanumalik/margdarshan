import React, { ReactNode } from "react";
import NotesCard from "./notes-card";

type NotesProps = {
  title: ReactNode;
};

const Notes = () => {
  const notesData = [
    {
      id: 1,
      title: "Physics Notes",
      description: "Elementary Physics Notes",
      course: "BSC Physics",
      semester: "1st",
    },
    {
      id: 2,
      title: "Chemistry Notes",
      description: "Elementary Chemistry Notes",
      course: "BSC Chemistry",
      semester: "1st",
    },
    {
      id: 3,
      title: "Mathematics Notes",
      description: "Elementary Mathematics Notes",
      course: "BSC Mathematics",
      semester: "1st",
    },
    {
      id: 4,
      title: "Physics Notes",
      description: "Elementary Physics Notes",
      course: "BSC Physics",
      semester: "2nd",
    },
    {
      id: 7,
      title: "Physics Notes",
      description: "Elementary Physics Notes",
      course: "BSC Physics",
      semester: "3rd",
    },
    {
      id: 8,
      title: "Chemistry Notes",
      description: "Elementary Chemistry Notes",
      course: "BSC Chemistry",
      semester: "3rd",
    },
    {
      id: 9,
      title: "Mathematics Notes",
      description: "Elementary Mathematics Notes",
      course: "BSC Mathematics",
      semester: "3rd",
    },
    {
      id: 10,
      title: "Computer Science Notes",
      description: "Elementary Computer Science Notes",
      course: "BTech Computer Science",
      semester: "1st",
    },
    {
      id: 11,
      title: "Computer Science Notes",
      description: "Elementary Computer Science Notes",
      course: "BTech Computer Science",
      semester: "2nd",
    },
    {
      id: 12,
      title: "Computer Science Notes",
      description: "Elementary Computer Science Notes",
      course: "BTech Computer Science",
      semester: "3rd",
    },
  ];
  return (
    <main>
      <div className="grid grid-cols-6 gap-2">
        {notesData.map((note) => (
          <NotesCard {...note} key={note.id} />
        ))}
      </div>
    </main>
  );
};

export default Notes;
