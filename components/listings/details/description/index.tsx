import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Description() {
  return (
    <Card className="border-none shadow ">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-gray-950">
          Description
        </CardTitle>
        <Separator className="bg-slate-200" />
      </CardHeader>
      <CardContent>
        <article className="prose lg:prose-sm">
          <Markdown remarkPlugins={[remarkGfm]}>
            **2 bedroom fully furnished loft type** Long term lease only 50K per
            month 2 mos deposit 2 mos advance. 10 pdc Condominium property for
            rent in Ususan, Taguig, Metro Manila
          </Markdown>
        </article>
      </CardContent>
    </Card>
  );
}

export default Description;
