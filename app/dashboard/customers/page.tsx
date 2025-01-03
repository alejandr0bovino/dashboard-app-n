"use client"
import React from "react";
// import {
//   RadioGroup, Radio,
//   Form, Input, Button
// } from "@nextui-org/react";

export default function Page() {
  const [action, setAction] = React.useState<string | null>(null);

  console.log("Customers Page");

  return <>
    <p>Customers Page</p>

    {/* <RadioGroup label="Select your favorite city">
      <Radio value="buenos-aires">Buenos Aires</Radio>
      <Radio value="sydney">Sydney</Radio>
      <Radio value="san-francisco">San Francisco</Radio>
      <Radio value="london">London</Radio>
      <Radio value="tokyo">Tokyo</Radio>
    </RadioGroup>

    <br /><br /><br />
    <Form
      className="w-full max-w-xs flex flex-col gap-4"
      validationBehavior="native"
      onReset={() => setAction("reset")}
      onSubmit={(e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.currentTarget));

        setAction(`submit ${JSON.stringify(data)}`);
      }}
    >
      <Input
        isRequired
        errorMessage="Please enter a valid username"
        label="Username"
        labelPlacement="outside"
        name="username"
        placeholder="Enter your username"
        type="text"
      />

      <Input
        isRequired
        errorMessage="Please enter a valid email"
        label="Email"
        labelPlacement="outside"
        name="email"
        placeholder="Enter your email"
        type="email"
      />

      <div className="flex gap-2">
        <Button color="primary" type="submit">
          Submit
        </Button>
        <Button type="reset" variant="flat">
          Reset
        </Button>
      </div>

      {action && (
        <div className="text-small text-default-500">
          Action: <code>{action}</code>
        </div>
      )}
    </Form>

    <br /><br />

    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input
        isClearable
        className="max-w-xs"
        defaultValue="junior@nextui.org"
        label="Email"
        placeholder="Enter your email"
        type="email"
        variant="bordered"
        onClear={() => console.log("input cleared")}
      />
    </div> */}
  </>;
}