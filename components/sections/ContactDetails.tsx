"use client";

const ContactDetails = () => {
    const details = [
        {
            label: "Email",
            value: "proviacore@gmail.com",
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
            color: "bg-purple-50 text-purple-600 border-purple-100",
            href: "mailto:proviacore@gmail.com"
        },
        {
            label: "Phone",
            value: "+234 815 176 2900",
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
            color: "bg-blue-50 text-brand-blue border-blue-100",
            href: "tel:+2348151762900"
        },
        {
            label: "Address",
            value: "85 Aladelola, Ikosi-Ketu, Lagos, Nigeria",
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
            color: "bg-amber-50 text-amber-600 border-amber-100",
            href: "https://www.google.com/maps/search/?api=1&query=85+Aladelola,+Ikosi-Ketu,+Lagos,+Nigeria"
        },
    ];

    return (
        <div className="flex flex-col gap-3 w-full">
            {details.map((detail) => {
                const CardElement = detail.href ? 'a' : 'div';
                return (
                    <CardElement 
                        key={detail.label} 
                        href={detail.href}
                        target={detail.href?.startsWith('http') ? '_blank' : undefined}
                        rel={detail.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="card-base bg-white p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow group cursor-pointer decoration-transparent select-text"
                    >
                        <div className={`${detail.color} w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform border`}>
                            {detail.icon}
                        </div>
                        <div className="flex-grow min-w-0">
                            <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-0.5">{detail.label}</h3>
                            <p className="text-sm font-bold text-zinc-900 truncate group-hover:text-[var(--brand-blue)] transition-colors">{detail.value}</p>
                        </div>
                    </CardElement>
                );
            })}
        </div>
    );
};

export default ContactDetails;
