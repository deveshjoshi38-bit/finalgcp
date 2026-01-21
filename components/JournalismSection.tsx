import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import ParallaxImage from './ParallaxImage';
import { ExternalLink } from 'lucide-react';

interface JournalismStory {
    title: string;
    summary: string;
    supporting: string;
    imageUrl: string;
    link: string;
}

const stories: JournalismStory[] = [
    {
        title: "Justice for Jyoti Singh: A Mother's Long Wait",
        summary: "The story chronicles the long battle for justice by the parents of Jyoti Singh, whose brutal gang rape in New Delhi sparked global outrage. It captures the moment her mother reflects on the closure brought by the execution of the perpetrators after a years-long wait.",
        supporting: "This piece provides a deep dive into the emotional aftermath of one of India's most high-profile criminal cases.\nIt explores the mother's unwavering resolve and the systemic delays that define the pursuit of justice in such tragic circumstances.\nThe narrative highlights the intersection of personal grief and national legal reforms.",
        imageUrl: "https://www.telegraph.co.uk/content/dam/women/2020/03/20/TELEMMGLPICT000228214832_trans_NvBQzQNjv4BqSw1JcONncIvdV_EnjsnkAgzDvZHoxG5Pk01xSfGx6lA.jpeg?impolicy=OG-Standard",
        link: "https://www.telegraph.co.uk/women/life/new-delhi-gang-rape-mother-better-daughter-died-have-wait-7/"
    },
    {
        title: "The Tragic Reality of Abandoned Daughters",
        summary: "This investigation exposes the tragic reality of female infanticide and abandonment in India, where baby girls are left on the doorsteps of orphanages due to poverty and societal pressure. It follows the efforts of a New Delhi orphanage dedicated to providing a safe haven and a future for these vulnerable infants.",
        supporting: "The piece explores the deep-seated cultural and economic triggers that lead to the systemic rejection of female children.\nIt highlights the heroic work of caregivers who strive to give these children a chance at life through adoption and education.\nThrough personal stories and statistics, the narrative calls attention to the urgent need for social change.",
        imageUrl: "https://i2-prod.mirror.co.uk/article10889844.ece/ALTERNATES/s1200/EMB-PAY-PROD-CAP_330670_01.jpg",
        link: "https://www.mirror.co.uk/news/world-news/dumped-doorstep-thousands-baby-girls-10896056"
    },
    {
        title: "Living with Progeria: A Child's Struggle",
        summary: "This touching report offers a glimpse into the life of a young boy born with a rare medical condition that causes him to age prematurely. It highlights the emotional toll on his family and the challenges of living with a condition that remains poorly understood in his community.",
        supporting: "The story sheds light on the rare condition known as progeria and its impact on a child's early development and social interaction.\nIt details the mother's struggle to find medical help and her profound sense of helplessness in the face of her son's rapid aging.\nThe narrative emphasizes the need for greater awareness and medical research into rare genetic disorders.",
        imageUrl: "https://i2-prod.mirror.co.uk/article8522185.ece/ALTERNATES/s1200/PAY-Bayezid-Hossain.jpg",
        link: "https://www.mirror.co.uk/news/world-news/inside-world-four-year-old-8522318"
    },
    {
        title: "Empowerment Through Sport: Child Brides on the Pitch",
        summary: "This story highlights an extraordinary football team in India composed entirely of young women who were married off as children. Through the power of sport, these girls are reclaiming their agency and challenging deeply ingrained societal traditions.",
        supporting: "The piece explores how a football initiative provides a safe haven for child brides to escape the pressures of their early marriages.\nIt documents their journey from fear to empowerment on the pitch, showcasing the transformative impact of collective action.\nThe narrative emphasizes the resilience of these young athletes as they break through cultural barriers.",
        imageUrl: "https://i2-prod.mirror.co.uk/article12201339.ece/ALTERNATES/s1200f/EMB-PAY-PROD-SUNDAY-CAP_330792_32.jpg",
        link: "https://www.mirror.co.uk/news/world-news/child-brides-united-football-team-12205210"
    },
    {
        title: "Teen Survivor of 'Honour' Attack: A Fight for Life",
        summary: "Ruby, 18, from a village in Sambhal, was brutally shot by her father and brother in an attempted 'honour killing' for speaking to her boyfriend. This report captures her miraculous survival and the ongoing investigation into the horrific family violence.",
        supporting: "The narrative exposes the deeply entrenched patriarchal violence in rural India, where family 'honour' is valued above life itself.\nIt details the gruesome attack and the subsequent legal actions taken against the perpetrators.\nThrough Ruby's story, the piece calls for a re-examination of social norms and stricter enforcement of laws protecting women.",
        imageUrl: "https://i.dailymail.co.uk/i/pix/2017/05/12/12/403BC9CE00000578-0-image-a-17_1494590389991.jpg",
        link: "https://www.dailymail.co.uk/news/article-4499600/Girl-fights-life-father-brother-shot-her.html"
    },
    {
        title: "Betrayed by Blood: A Widow's Vow for Justice",
        summary: "Gowsalya Sankar survived a brutal caste-based attack ordered by her own father that killed her husband. Now living under police protection, she fights for capital punishment for her family, becoming a powerful voice against caste violence.",
        supporting: "This harrowing account details the daylight attack in Tamil Nadu and the tragic loss of a young life to caste prejudice.\nIt explores Gowsalya's transformation from a victim to a crusader for justice, renouncing her family ties.\nThe story serves as a stark reminder of the deadly consequences of caste discrimination in modern India.",
        imageUrl: "https://i.dailymail.co.uk/i/pix/2016/04/21/12/33662BCE00000578-0-image-a-3_1461239115384.jpg",
        link: "https://www.dailymail.co.uk/news/article-3551521/Dad-murdered-husband-tried-kill-want-dead-Extraordinary-bravery-tragic-honour-killing-victim-wants-father-sentenced-death.html"
    },
    {
        title: "The Slumdog Seamstress & The Royal Dress",
        summary: "Babita Sabath, a Mumbai seamstress earning £3 a day, unknowingly crafted a dress worn by the Duchess of Cambridge, which became an instant global sensation. The story contrasts the world of royal glamour with the humble reality of the artisan behind the seams.",
        supporting: "The piece highlights the 'Kate effect' and the disconnect between the luxury fashion market and the workers who fuel it.\nIt captures Babita's humble pride and shock at her work being worn by royalty.\nThe narrative provides a human face to the global textile supply chain, celebrating the invisible hands of craftsmanship.",
        imageUrl: "https://i.dailymail.co.uk/i/pix/2016/04/13/08/3320F21700000578-0-image-a-18_1460532808317.jpg",
        link: "https://www.dailymail.co.uk/news/article-3536608/I-don-t-know-Kate-Slumdog-Seamstress-makes-3-day-stitching-Duchess-Cambridge-s-140-boho-frock-Mumbai-never-heard-her.html"
    },

    {
        title: "Mothers to the Wild: The Bishnoi Tradition",
        summary: "In Rajasthan's Bishnoi community, women breastfeed orphaned fawns alongside their own children, treating them as sacred family members. This report explores this unique bond of compassion and the tribe's deep-rooted dedication to protecting nature.",
        supporting: "The story delves into the spiritual and ecological philosophy of the Bishnoi tribe, who live by 29 principles of conservation.\nIt highlights the extraordinary lengths to which the community goes to protect wildlife from harm.\nThe narrative celebrates a rare and profound example of human-animal coexistence.",
        imageUrl: "https://i.dailymail.co.uk/i/pix/2016/04/29/09/33A4963600000578-0-image-a-3_1461918586352.jpg",
        link: "https://www.dailymail.co.uk/news/article-3564005/I-breastfeed-deer-like-one-family.html"
    },
    {
        title: "Delhi in a War Zone: The Pandemic Crisis",
        summary: "A harrowing firsthand account of the devastating second wave of Covid-19 that overwhelmed India's capital, turning the city into a virtual war zone. It details the desperate struggle for oxygen and hospital beds as families faced unprecedented loss amidst a collapsing healthcare infrastructure.",
        supporting: "This report captures the raw emotional toll and systemic failures during the height of the pandemic outbreak in Delhi.\nIt features personal testimonies from healthcare workers and citizens who navigated the crisis, emphasizing the global scale of the tragedy.\nThe coverage provides a critical lens on the government's response and the humanitarian efforts on the ground.",
        imageUrl: "https://images.bauerhosting.com/legacy/media/6091/6a80/dcb2/f01c/925d/f2e4/GettyImages-1232684822.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80",
        link: "https://graziadaily.co.uk/life/in-the-news/india-covid-latest-news/"
    },
    {
        title: "Voices for Change: Investigative Reporting in India",
        summary: "This work documents the shocking details of violent assault and human rights violations, reflecting on the broader systemic issues of gender-based violence. The coverage presents a stark visual and narrative critique of the societal attitudes that perpetuate such atrocities.",
        supporting: "Part of a powerful journalism portfolio, this piece showcases impactful photographic and written coverage of social justice issues.\nIt serves as a somber reminder of the vulnerabilities faced by children and the urgent need for legal and social reform.\nThe collection represents a body of work dedicated to giving a voice to the voiceless through rigorous reporting.",
        imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRSPmcx7TvkrmTVfHTt58Cuekgww95NVzwvtb5YhFERu45CcOagCYlmzNk7FDx96r4K5oidEZGQJGoB_WKhnu1bijyuYPlDhpqzWUUKADRCYU3NBxbMarQeX6tqKo29rhbqQh1vIHAq60/s640/G1.JPG",
        link: "https://www.faisalmagray.com/p/tearsheets.html?m=1"
    }
];

const JournalismSection: React.FC = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <SectionHeading
                    title="Journalism & Press"
                    subtitle="Impactful Storytelling"
                    alignment="left"
                    className="mb-12"
                />

                <div className="max-w-3xl mb-20">
                    <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                        A selection of impactful bylines and investigative stories published across global news portals.
                        These reports delve into critical social issues, from human rights to systemic challenges, reflecting a
                        commitment to rigorous storytelling and deep-rooted journalistic integrity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                    {stories.map((story, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8, delay: index % 2 * 0.2 }}
                            className="flex flex-col group"
                        >
                            <a
                                href={story.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative block overflow-hidden aspect-[16/10] mb-8 bg-neutral-900"
                            >
                                <ParallaxImage
                                    src={story.imageUrl}
                                    alt={story.title}
                                    className="grayscale group-hover:grayscale-0 transition-all duration-700"
                                    aspectRatio="aspect-auto h-full w-full"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="bg-white/90 p-4 rounded-full">
                                        <ExternalLink className="w-6 h-6 text-black" />
                                    </div>
                                </div>
                            </a>

                            <div className="flex flex-col flex-grow">
                                <h3 className="text-2xl md:text-3xl font-serif text-white mb-6 leading-tight group-hover:text-secondary transition-colors duration-300">
                                    {story.title}
                                </h3>

                                <p className="text-gray-300 text-lg font-light leading-relaxed mb-6 italic border-l-2 border-white/20 pl-6">
                                    {story.summary}
                                </p>

                                <div className="space-y-2 text-gray-400 text-sm tracking-wide leading-relaxed mt-auto">
                                    {story.supporting.split('\n').map((line, i) => (
                                        <p key={i}>{line}</p>
                                    ))}
                                </div>

                                <a
                                    href={story.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-8 text-sm uppercase tracking-widest text-white border-b border-white/20 pb-2 w-max hover:border-white transition-colors duration-300 flex items-center gap-2"
                                >
                                    Read Full Story <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JournalismSection;
