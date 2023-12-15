"use client";
import { canCompleteCircuit } from "../utils";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { formSchema } from "../data/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

export const GasStationForm = () => {
  const handleSolve = (data: z.infer<typeof formSchema>) => {
    const grifos = data.grifos.trim().replace(/^\[/, "").replace(/\]$/, "");
    const costos = data.costos.trim().replace(/^\[/, "").replace(/\]$/, "");
    const grifoArray = grifos.split(",").map(Number);
    const costoArray = costos.split(",").map(Number);
    const result = canCompleteCircuit(grifoArray, costoArray);
    toast.success(`Indice de inicio: ${result}`);
  };
  function onSubmit(data: z.infer<typeof formSchema>) {
    handleSolve(data);
  }
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  return (
    <div className="max-w-5xl w-full">
      <div className="p-4 w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-y-4 items-starts justify-center h-[6.4rem]"
          >
            <FormField
              control={form.control}
              name="grifos"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Grifos</FormLabel>
                  <FormControl>
                    <Input
                      className="border p-2 "
                      placeholder="Valores de grifo ej: [1,2,3]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="line-clamp-1" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="costos"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Costos</FormLabel>
                  <FormControl>
                    <Input
                      className="border p-2 "
                      placeholder="Costos ej: [3,4,5]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="line-clamp-1" />
                </FormItem>
              )}
            />

            <Button type="submit">Resolver</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
