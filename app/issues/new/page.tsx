"use client";
import React, { useState } from "react";
import { TextField } from "@radix-ui/themes";
import { TextArea } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Button } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Callout } from "@radix-ui/themes";
interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const { register, control, handleSubmit } = useForm<IssueForm>();

  return (
    <div className="max-w-xl ">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

      <form
        className=" space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setError("An Unexpected error occoured");
          }
        })}
      >
        <TextField.Root size="3" placeholder="Title" {...register("title")}>
          <TextField.Slot />
        </TextField.Root>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Desscription" {...field} />
          )}
        />

        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
