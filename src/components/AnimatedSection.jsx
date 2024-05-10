import { useInView } from "framer-motion";
import { useRef } from "react";
import Container from "./Container";

export default function AnimatedSection({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className="py-10 ">
            <Container>
                <div className="md:flex h-full items-center">
                    {children(isInView)}
                </div>
            </Container>
        </section>
    );
}
