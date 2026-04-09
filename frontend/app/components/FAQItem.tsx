'use client'

import { ChevronDown } from "lucide-react"

interface FAQItemProps {
    num_qst: number
    isOpen: boolean
    onToggle: () => void
}

export default function FAQItem({ num_qst, isOpen, onToggle }: FAQItemProps) {
    return (
        <div onClick={onToggle} className="block cursor-pointer">
            <div className="flex justify-between font-bold text-2xl px-3 mt-10">
                <p>Question {num_qst}</p>
                <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
            </div>

            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                    <p className="text-left px-3 mx-3 border-l-4 mt-3 pb-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit...
                    </p>
                </div>
            </div>
        </div>
    )
}