import workflow from "../data/workflow";

const Workflow = () => {
  return (
    <section
      id="workflow"
      className="bg-slate-950 text-white py-20 px-6"
    >
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          How I Build Software
        </h2>

        {workflow.map((step, index) => (
          <div key={index}>

            {/* Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg hover:border-sky-500 transition">
              <h3 className="text-xl font-semibold text-sky-400">
                {step.title}
              </h3>

              <p className="text-slate-400 mt-2">
                {step.description}
              </p>
            </div>

            {/* Arrow */}
            {index !== workflow.length - 1 && (
              <div className="flex justify-center py-4">
                <span className="text-3xl text-sky-400">
                  ↓
                </span>
              </div>
            )}

          </div>
        ))}
      </div>
    </section>
  );
};

export default Workflow;