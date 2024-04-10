import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SearchBar() {
    return (
        <div className=" m-5 grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="email">Flash Deals</Label>

            <Input
                type="email"
                id="email"
                placeholder="Search in Flash Deals"
            />
        </div>
    );
}
