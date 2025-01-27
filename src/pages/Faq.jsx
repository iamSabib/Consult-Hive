

const Faq = () => {
    return (
        <section className="py-10 bg-base-100">
            <div className="max-w-4xl mx-auto px-4">
                {/* Section Header */}
                <h2 className="text-4xl font-bold text-center text-primary mb-8">
                    Frequently Asked Questions
                </h2>
                <p className="text-center text-lg text-gray-600 mb-10">
                    Have questions about our consultation platform? We’re here to help!
                </p>
                
                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {/* Question 1 */}
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="faq-accordion" defaultChecked />
                        <div className="collapse-title text-lg font-medium">
                            How does the consultation process work?
                        </div>
                        <div className="collapse-content">
                            <p>
                                After signing up, you can browse through our experts, book a consultation at your preferred time, and connect via video, audio, or chat for a personalized session.
                            </p>
                        </div>
                    </div>

                    {/* Question 2 */}
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title text-lg font-medium">
                            What are the charges for a consultation?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Consultation fees vary depending on the expert and duration of the session. Pricing details are clearly mentioned on the expert's profile.
                            </p>
                        </div>
                    </div>

                    {/* Question 3 */}
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title text-lg font-medium">
                            Can I reschedule or cancel a booking?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Yes, you can reschedule or cancel a booking up to 24 hours before the session. Cancellations may incur a small fee based on our policy.
                            </p>
                        </div>
                    </div>

                    {/* Question 4 */}
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title text-lg font-medium">
                            Are the consultations confidential?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Absolutely! All consultations are private and secure. Your personal details and session content are protected by our strict privacy policy.
                            </p>
                        </div>
                    </div>

                    {/* Question 5 */}
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title text-lg font-medium">
                            What if I am not satisfied with the consultation?
                        </div>
                        <div className="collapse-content">
                            <p>
                                We strive for the best experience! If you’re unsatisfied, you can contact our support team for assistance or a potential refund based on the situation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
