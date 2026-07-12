import { Button, Input, Card } from "../components/ui";

export default function Playground() {
    return (
        <div className="space-y-8 p-8">
            <section className="space-y-4">
                <h2 className="text-xl font-semibold">Buttons</h2>
                <div className="flex flex-wrap gap-4">
                    <Button>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline"> Outline </Button>
                    <Button variant="ghost"> Ghost </Button>
                    <Button variant="danger"> Danger </Button>
                </div>
            </section>
            <section className="space-y-4">
                <h2 className="text-xl font-semibold"> Inputs </h2>
                <div className="max-w-md space-y-4">
                    <Input placeholder="Full Name" />
                    <Input type="email" placeholder="Email Address" />
                    <Input type="password" placeholder="Password" />
                    <Input disabled placeholder="Disabled Input" />
                </div>
            </section>
        </div>
    );
}