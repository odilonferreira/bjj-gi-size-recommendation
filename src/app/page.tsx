import RecommendationWrapper from "./_components/recommendation-wrapper";

export default function Home() {
  return (
    <main className="flex h-full sm:items-center justify-center">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="space-y-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="w-full text-center">
              <h1 className="text-3xl font-bold">
                Recomendação de tamanho de kimono
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Encontre o tamanho perfeito do seu quimono com base na sua
                altura e peso.
              </p>
            </div>
          </div>
          <RecommendationWrapper />
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Observe que o tamanho recomendado pode variar dependendo da marca e
            estilo específico do quimono.
          </p>
        </div>
      </div>
    </main>
  );
}
