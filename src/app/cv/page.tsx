import { Button } from "@/components/Button";
import { SimpleLayout } from "@/components/SimpleLayout";
import { type Metadata } from "next";

export const metadata: Metadata = {
    title: 'CV',
    description: 'Download my curriculum vitae.'
}

export default async function CVPage() {
    return (
        <SimpleLayout
            title="Curriculum Vitae"
            intro="Want to know more about my education, work experience and skills? Download my CV below."
        >
            <a href="./cv-robin-baeteman.pdf" download>
                <Button>Download CV</Button>
            </a>
        </SimpleLayout>
    )
}