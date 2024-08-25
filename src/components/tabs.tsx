import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function tabs() {
  return (
    <Tabs defaultValue="sleep" className="w-full py-10">
      <TabsList className="grid w-1/3 mx-auto grid-cols-2">
        <TabsTrigger value="sleep">SLEEP</TabsTrigger>
        <TabsTrigger value="wakeup">WAKE UP</TabsTrigger>
      </TabsList>
      <TabsContent value="sleep">
        <div className="text-center max-w-[60em] mx-auto mb-6 w-[70%] space-y-1 min-h-[50vh]">
          <Label htmlFor="name">Sleep</Label>
          <h3 className="text-slate-300 scroll-m-20 text-2xl font-semibold tracking-tight">
            I want to wake up at...
          </h3>
        </div>
      </TabsContent>
      <TabsContent value="wakeup">
        <div className="text-center max-w-[60em] mx-auto mb-6 w-[70%] space-y-1 min-h-[50vh]">
          <Label htmlFor="name">Sleep</Label>
          <h3 className="text-slate-300 scroll-m-20 text-2xl font-semibold tracking-tight">
            If I sleep now, wake up at...
          </h3>
        </div>
      </TabsContent>
    </Tabs>
  );
}
