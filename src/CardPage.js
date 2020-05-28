import React from 'react';
import Card from './Card';
import './styles/CardPage.css';

const cardsData = [
    {
        heading: "Free HubSpace CRM",
        content: "Everything you need to organize, track, and build better relationships with leads and customers. Yes, it's 100% free. Forever.",
        features: ["Contact Insights", "Deals", "Tasks"],
        buttonText: "Get free CRM",
        icon: <i class="far fa-dot-circle fa-2x"></i>
    },
    {
        heading: "CMS Hub",
        content: "Content management software that’s flexible for marketers, powerful for developers, and gives customers a personalized, secure experience.",
        features: ["Drag-and-Drop Editor", "SEO Recommendations", "Website Themes"],
        buttonText: "Get started",
        icon: <i class="fas fa-book-open fa-2x"></i>
    },
    {
        heading: "Marketing Hub",
        content: "Marketing software to help you grow traffic, convert more visitors, and run complete inbound marketing campaigns at scale.",
        features: ["Lead Generation", "Marketing Automation", "Analytics"],
        buttonText: "Get started",
        icon: <i class="fas fa-bolt fa-2x"></i>
    },
    {
        heading: "Sales Hub",
        content: "Time-saving sales software that helps you get deeper insights into prospects, automate the tasks you hate, and close more deals faster.",
        features: ["Email Tracking", "Meeting Scheduling", "Email Automation"],
        buttonText: "Get started",
        icon: <i class="fas fa-star fa-2x"></i>
    },
    {
        heading: "Service Hub",
        content: "Customer service software to help you connect with customers, exceed expectations, and turn them into promoters that grow your business.",
        features: ["Tickets", "Customer Feedback", "Knowledge Base"],
        buttonText: "Get started",
        icon: <i class="fas fa-heart fa-2x"></i>
    }
]

export default function CardPage() {
    return (
        <div className='CardPage'>
            <div className='CardPage-box'>
                <div className='CardPage-row'>
                    <div className='CardPage-text'>
                        <h1>Powerful alone. Better together.</h1>
                        <p>HubSpace offers a full stack of software for marketing, sales, and customer service, with a completely free CRM at its core. They’re powerful alone — but even better when used together.</p>
                    </div>
                    <Card data={cardsData[0]} />
                    <Card data={cardsData[1]} />
                </div>
                <div className='CardPage-row'>
                    <Card data={cardsData[2]} />
                    <Card data={cardsData[3]} />
                    <Card data={cardsData[4]} />
                </div>
            </div>
        </div>
    )
}
