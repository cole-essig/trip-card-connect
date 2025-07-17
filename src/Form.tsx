import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import emailjs from '@emailjs/browser';
import CactusImage1 from './assets/cactus1.svg'

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required"),
  message: z.string().min(1, "Message is required"),
  phone: z.string().optional(), // Hidden field for spam prevention
});

const EMAILJS_USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

type FormData = z.infer<typeof formSchema>;

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      phone: "", // Hidden field
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // Honey pot check
    // If the phone field is filled, it's likely a bot submission
    if (data.phone) {
      return;
    }
    if (isSubmitting) return; // Prevent multiple submissions
    setIsSubmitting(true);
      try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          time: new Date().toLocaleString(),
          message: data.message,
        },
        EMAILJS_USER_ID
      );
      console.log("Email sent successfully:", result.text);
    } catch (error: any) {
      console.error("Error sending email:", error.text);
    }
      form.reset();
      alert("Message sent successfully!");
      setTimeout(() => {
        setIsSubmitting(false);
      }, 60000);
  };
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4 w-full max-w-2xl text-white p-6 rounded-xl"
            >
                {/* Honeypot Field */}
                <input
                type="text"
                name="phone"
                autoComplete="off"
                tabIndex={-1}
                style={{ display: "none" }}
                aria-hidden="true"
                />

                {/* Name Field */}
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormControl>
                        <Input
                        placeholder="Your Name"
                        {...field}
                        className="bg-transparent border-4 border-black text-black font-bold placeholder-white p-4 rounded-md"
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                {/* Email Field */}
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormControl>
                        <Input
                        placeholder="Your Email"
                        {...field}
                        className="bg-transparent border-4 border-black text-black font-bold placeholder-white p-4 rounded-md"
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                {/* Message Field */}
                <div className="flex-1 flex flex-col">
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                    <FormItem className="flex-1 flex flex-col">
                        <FormControl className="flex-1">
                        <Textarea
                            placeholder="Your message"
                            {...field}
                            className="flex-1 w-full min-h-[160px] resize-none bg-transparent border-4 border-black text-black font-bold placeholder-white p-4 rounded-md"
                        />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                </div>

                {/* Submit Button */}
                <Button
                type="submit"
                variant="ghost"
                disabled={isSubmitting}
                className="w-full bg-transparent border-4 border-black text-black font-bold placeholder-white 
                    p-4 rounded-md p-6 text-[22px] rounded-md
                    transition-transform duration-300 ease-in-out
                    hover:scale-[1.02] hover:-translate-y-[2px]
                    hover:shadow-[0_10px_30px_rgba(144,238,144,0.45),0_0_60px_rgba(255,255,255,0.45)]
                    backdrop-blur-md cursor-pointer mt-auto"
                >
                {isSubmitting ? "Sending..." : "Send Message"}
                <img src={CactusImage1} className="w-6 h-6 inline-block ml-2" alt="Cactus Icon" />
                </Button>
            </form>
        </Form>
    );
}

export default ContactForm;