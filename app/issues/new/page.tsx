import React from "react";
import { TextField } from "@radix-ui/themes";
import { TextArea } from "@radix-ui/themes";
import { Button } from "@radix-ui/themes";
const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root size="3" placeholder="Title">
        <TextField.Slot />
      </TextField.Root>
      <TextArea placeholder="Desscription" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
