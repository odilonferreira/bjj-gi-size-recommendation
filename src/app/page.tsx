import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Home() {
  return (
    <main className="flex h-full sm:items-center justify-center">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="space-y-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="w-full text-center">
              <h1 className="text-3xl font-bold">Kimono Size Recommendation</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Find your perfect kimono size based on your gender, age and
                weight.
              </p>
            </div>
          </div>
          <form className="grid gap-6">
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <RadioGroup
                  defaultValue="male"
                  id="gender"
                  className="flex sm:flex-col"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="gender-male" value="male" />
                    <Label htmlFor="gender-male">Male</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="gender-female" value="female" />
                    <Label htmlFor="gender-female">Female</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input id="age" placeholder="Enter your age" type="number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (lbs)</Label>
                <Input
                  id="weight"
                  placeholder="Enter your weight"
                  type="number"
                />
              </div>
            </div>
            <Button className="w-full" type="submit">
              Get Recommendation
            </Button>
          </form>
          <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Recommended Kimono Size</h2>
              <div className="text-4xl font-bold">XL</div>
            </div>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Based on your gender, age and weight, we recommend an XL size
              kimono. Please note that the recommended size may vary depending
              on the specific brand and style of kimono.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
