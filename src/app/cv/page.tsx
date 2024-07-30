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
            intro="Download my curriculum vitae here."
        >
            <a href="./cv-robin-baeteman.pdf" download>
                <Button>Download CV</Button>
            </a>
        </SimpleLayout>
    )
}