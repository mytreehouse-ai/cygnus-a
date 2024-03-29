import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface DescriptionProps {
  markdown: string;
  description: string;
}

function Description({ markdown, description }: DescriptionProps) {
  return (
    <Card className="border-none shadow">
      <CardHeader className="space-y-5">
        <CardTitle className="text-lg font-bold text-gray-950">
          Description
        </CardTitle>
        <Separator className="bg-slate-200" />
      </CardHeader>
      <CardContent>
        <article className="prose prose-base max-w-none">
          <Markdown remarkPlugins={[remarkGfm]}>
            {markdown || description}
          </Markdown>
        </article>
      </CardContent>
    </Card>
  );
}

export default Description;
