"use client";
import React from "react";
import { TextField } from "@radix-ui/themes";
import { TextArea } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Button } from "@radix-ui/themes";
const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root size="3" placeholder="Title">
        <TextField.Slot />
      </TextField.Root>
      <SimpleMDE placeholder="Desscription" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
