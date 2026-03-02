import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Loader2, CheckCircle } from "lucide-react";

const enquiryOptions = [
  "HubSpot Implementation",
  "Technical Build",
  "AI & Automation",
  "Advisory",
  "General Enquiry",
] as const;

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  company: z.string().optional(),
  interest: z.string().min(1, {
    message: "Please select one option.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      interest: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      const payload = {
        name: values.name,
        email: values.email,
        company: values.company,
        message: `Focus area: ${values.interest}\n\n${values.message}`,
      };
      const res = await apiRequest("POST", "/api/inquiries", payload);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutation.mutate(values);
  }

  return (
    <div className="max-w-2xl mx-auto glass-card border border-white/12 p-7 md:p-8 rounded-2xl bg-[#060D29]/90" data-testid="contact-form">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="interest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What are you looking for?</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger
                        className="h-11 bg-[#0A1236]/80 border-white/20 text-white data-[placeholder]:text-white/45 focus:ring-brand-teal/30 focus:border-brand-teal/70"
                        data-testid="select-interest"
                      >
                        <SelectValue placeholder="Choose a focus area" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-[#0A1236] border-white/15 text-white">
                      {enquiryOptions.map((option) => (
                        <SelectItem key={option} value={option} className="focus:bg-white/10 focus:text-white">
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your full name"
                      {...field}
                      className="h-11 bg-[#0A1236]/80 border-white/20 text-white placeholder:text-white/45 focus:border-brand-teal/70 focus-visible:ring-brand-teal/30"
                      data-testid="input-name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="name@company.com"
                      {...field}
                      className="h-11 bg-[#0A1236]/80 border-white/20 text-white placeholder:text-white/45 focus:border-brand-teal/70 focus-visible:ring-brand-teal/30"
                      data-testid="input-email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Company or team name"
                      {...field}
                      className="h-11 bg-[#0A1236]/80 border-white/20 text-white placeholder:text-white/45 focus:border-brand-teal/70 focus-visible:ring-brand-teal/30"
                      data-testid="input-company"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Share context, goals, timelines, and any current blockers." 
                      className="resize-none h-36 bg-[#0A1236]/80 border-white/20 text-white placeholder:text-white/45 focus:border-brand-teal/70 focus-visible:ring-brand-teal/30" 
                      {...field}
                      data-testid="input-message"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              className="w-full bg-gradient-muloo border-none text-white hover:brightness-110 font-bold h-12 rounded-lg glow-muloo-sm"
              disabled={mutation.isPending}
              data-testid="button-submit"
            >
              {mutation.isPending ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
              ) : mutation.isSuccess ? (
                <><CheckCircle className="mr-2 h-4 w-4" /> Sent!</>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </Form>
    </div>
  );
}
