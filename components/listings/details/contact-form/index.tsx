import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

function ContactForm() {
  const contactUsForm = useForm();

  const onSubmit = () => {
    console.log("submit");
  };

  return (
    <Card className="border bg-neutral-50 shadow-sm ">
      <CardHeader>
        <CardTitle className="inline-flex items-center gap-x-2 text-lg font-bold text-gray-950">
          Contact Us Now!
        </CardTitle>
        <p className="text-xs font-normal text-slate-500">
          Paseo de Roxas, Makati
        </p>
      </CardHeader>
      <CardContent>
        <Form {...contactUsForm}>
          <form
            name="search-property-form"
            onSubmit={contactUsForm.handleSubmit(onSubmit)}
            className="flex flex-col gap-y-2"
          >
            <FormField
              control={contactUsForm.control}
              name="bathroom"
              render={({ field }) => (
                <FormItem className="w-auto md:w-full">
                  <FormControl>
                    <Input
                      placeholder="Full Name"
                      {...field}
                      value={field.value}
                      className="w-full rounded-lg text-sm md:w-full"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={contactUsForm.control}
              name="bathroom"
              render={({ field }) => (
                <FormItem className="w-auto md:w-full">
                  <FormControl>
                    <Input
                      placeholder="Contact Number"
                      {...field}
                      value={field.value}
                      className="w-full rounded-lg text-sm md:w-full"
                      type="number"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={contactUsForm.control}
              name="bathroom"
              render={({ field }) => (
                <FormItem className="w-auto md:w-full">
                  <FormControl>
                    <Input
                      placeholder="Address"
                      {...field}
                      value={field.value}
                      className="w-full rounded-lg text-sm md:w-full"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={contactUsForm.control}
              name="bathroom"
              render={({ field }) => (
                <FormItem className="w-auto md:w-full">
                  <FormControl>
                    <Textarea
                      placeholder="Message"
                      {...field}
                      value={field.value}
                      className="w-full rounded-lg text-sm md:w-full"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className="order-2 mt-3 w-full rounded-lg bg-emerald-600 hover:bg-emerald-700 focus:bg-emerald-600 active:bg-emerald-600 md:order-1">
              Inquire
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default ContactForm;
