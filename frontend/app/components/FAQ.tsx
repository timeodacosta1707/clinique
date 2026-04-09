'use client'

import { ChevronDown } from "lucide-react"
import { useState } from "react"

const questions = [
    { id: 1, question: "Question 1", reponse: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, ab reprehenderit, et corporis eveniet consequuntur facere, suscipit earum voluptas laborum in repellendus eligendi. Officiis harum, provident exercitationem autem tempore voluptas?" },
    { id: 2, question: "Question 2", reponse: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ab, magni fugit reiciendis corrupti vero in itaque dolorum necessitatibus iure eos quibusdam laborum, numquam aut fuga nemo earum ad consectetur?" },
    { id: 3, question: "Question 3", reponse: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil est consequatur quaerat officiis aperiam, nesciunt totam suscipit, saepe aut odio sed architecto cum ipsam ratione perferendis dignissimos nobis ad praesentium." },
    { id: 4, question: "Question 4", reponse: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corporis provident dolores illum nesciunt rem nemo, cumque ab numquam sequi unde aspernatur, quos, soluta repellendus odio fugit vel nam pariatur." },
    { id: 5, question: "Question 5", reponse: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptas impedit consequatur, culpa deleniti neque facere nam modi iste. Ut cum veritatis iusto quod a debitis doloribus dolores reiciendis aut?" },
]

export default function FAQ() {
    const [ouvert, setOuvert] = useState<number | null>(null)

    return (
        <div className="mt-20">
            {questions.map((q) => (
                <div key={q.id} onClick={() => setOuvert(ouvert === q.id ? null : q.id)} className="cursor-pointer mt-6">
                    <div className="flex justify-between">
                    <p className="font-bold text-2xl px-3">{q.question}</p>
                        <ChevronDown className={`transition-all duration-300 ${ouvert === q.id ? "rotate-180" : ""}`} />
                    </div>
                    <div className={`grid transition-all duration-300 ${ouvert === q.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                        <div className="overflow-hidden">
                            <p className="px-3 mx-3 border-l-4 mt-3 pb-3">{q.reponse}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}