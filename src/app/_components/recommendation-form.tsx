"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  height: z
    .string()
    .min(1, "Altura deve ter menos menos 1 caracter")
    .max(3, "Altura deve ter até 3 caracteres")
    .refine(
      (value) => Number(value) <= 215,
      "Altura deve ser no máximo de 215 centímetros"
    ),
  weight: z
    .string()
    .min(1, "Peso deve ter pelo menos 1 caracter")
    .max(3, "Peso deve ter até 3 caracteres")
    .refine(
      (value) => Number(value) <= 150,
      "Peso deve ser no máximo 150 kilos"
    ),
});

export type RecommendationFormSchema = z.infer<typeof formSchema>;

interface Props {
  onSubmit: (formValues: RecommendationFormSchema) => void;
}

const RecommendationForm = ({ onSubmit }: Props) => {
  const form = useForm<RecommendationFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      height: "",
      weight: "",
    },
  });

  const handleSubmit = (formValues: RecommendationFormSchema) => {
    onSubmit(formValues);
  };

  return (
    <Form {...form}>
      <form className="grid gap-6" onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="height"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Altura</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite sua altura em centímetros"
                      type="number"
                      min={0}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Peso</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite seu peso em kilos"
                      type="number"
                      min={0}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button className="w-full text-base" type="submit">
          Gerar recomendação
        </Button>
      </form>
    </Form>
  );
};

export default RecommendationForm;
