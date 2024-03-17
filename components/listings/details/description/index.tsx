"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Description() {
  return (
    <Card className="border-none shadow ">
      <CardHeader className="space-y-5">
        <CardTitle className="text-lg font-bold text-gray-950">
          Description
        </CardTitle>
        <Separator className="bg-slate-200" />
      </CardHeader>
      <CardContent>
        <article className="prose lg:prose-sm">
          <Markdown remarkPlugins={[remarkGfm]}>
            {"* Lists\n* [ ] todo\n* [x] done"}
          </Markdown>
        </article>
      </CardContent>
    </Card>
  );
}

export default Description;
