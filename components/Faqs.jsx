import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

import { FAQS } from "@/data";

const Faqs = () => {

    
  return (
    <section className="contenedor py-10 md:py-14">
        <h2 className="text-center text-h-gray-1 text-2xl mb-10 font-bold md:text-[32px] md:mb-[60px]">Faqs</h2>
        <div className="w-full md:w-[512px] md:mx-auto lg:w-[600px]">
        <Accordion type="single" collapsible>
            {FAQS.map(faq => (
                <AccordionItem value={`item-${faq.id}`} key={faq.id} className="border-b-h-blue-3">
                    <AccordionTrigger className="text-h-gray-1 text-left hover:no-underline leading-8">{faq.title}</AccordionTrigger>
                    <AccordionContent className="text-h-gray-2 text-sm leading-7">
                        {faq.text}
                    </AccordionContent>
                </AccordionItem>

            ))}
        </Accordion>
        </div>
    </section>
  )
}
export default Faqs