import { Button } from "@/components/ui/button";
import Image from "next/image";
import doctorImg from "../../../../public/doctor-hero.png"

export function Hero() {
    return(
        <section className="bg-white">
            <div className="container mx-auto px-4 pt-20 pb-4 sm:pb-0 sm:px-6 lg:px-8">
                <main className="flex items-center justify-center">

                    <article className="flex-[2] space-y-8 max-w-3xl flex-col justify-center">
                        <h1 className="text-4xl font-bold lg:text-5xl max-w-2xl">Encontre os melhores profissionais em um único local!</h1>
                        <p className="text-base md:text-lg text-gray-600 max-w-2xl">
                           Nós somos uma plataforma para profissionais da saúde com foco em agilizar seu atendimento de forma simplificada e organizada.
                        </p>

                        <Button className="bg-emerald-500 hover:bg-emerald-600 w-fit px-6 font-semibold">
                            Encontre uma Clínica
                        </Button>
                    </article>

                    <div className="hidden lg:block">
                        <Image 
                        src={doctorImg} 
                        alt="Foto ilustrativa profissional da saúde"
                        width={340}
                        height={400}
                        className="object-contain"
                        quality={100}
                        priority
                        />
                    </div>

                </main>
            </div>
        </section>
    )
}