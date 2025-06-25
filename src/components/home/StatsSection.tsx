
export const StatsSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">95%</div>
            <div className="text-blue-100">Accuracy Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">10k+</div>
            <div className="text-blue-100">Happy Families</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">50k+</div>
            <div className="text-blue-100">Meals Analyzed</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-blue-100">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};
