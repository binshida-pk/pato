import { useForm } from "@mantine/form";
import { TextInput, Group, PasswordInput, Button } from "@mantine/core";
import { randomId } from "@mantine/hooks";

function Signin() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
    },
  });

  return (
    <div className="min-h-screen grid grid-cols-3 items-center justify-center bg-amber-200  w-full">
      <div></div>
      <div className="grid grid-cols-2 gap-4 p-8  w-full rounded bg-white shadow-md  max-w-md ">
        <TextInput
          label="Name"
          placeholder="Name"
          key={form.key("name")}
          {...form.getInputProps("name")}
        />
        <TextInput
          mt="md"
          label="Email"
          placeholder="Email"
          key={form.key("email")}
          {...form.getInputProps("email")}
        />
        <PasswordInput
          size="md"
          label="Input label"
          description="Input description"
          placeholder="Input placeholder"
        />
        <Group justify="center" mt="xl">
          <Button
            onClick={() =>
              form.setValues({
                name: randomId(),
                email: `${randomId()}@test.com`,
              })
            }
          >
            submit
          </Button>
        </Group>
      </div>
    </div>
  );
}

export default Signin;
