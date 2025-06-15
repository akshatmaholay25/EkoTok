import { ContentValidationForm } from '@/components/admin/content-validation-form';
import { Bot } from 'lucide-react';

export function ContentValidationSection() {
  return (
    <section id="validate" className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Bot className="h-12 w-12 mx-auto text-primary mb-4" />
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            AI-Powered Content Check
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            Our GenAI tool helps ensure content aligns with GreenVibes&apos; values. Try the demo below to see how it analyzes video submissions for originality and relevance to sustainability.
          </p>
        </div>
        <ContentValidationForm />
      </div>
    </section>
  );
}
