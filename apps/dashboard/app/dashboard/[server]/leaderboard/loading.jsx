import { Block } from "@/components/blocks/Block";
import { Header1 } from "@/components/blocks/Headers";
import { EmbedSkeleton } from "@/components/blocks/Skeletons";

export default function Loading() {
 return (
  <>
   <Header1>
    <svg className="h-12 w-12 fill-white" viewBox="-2 -4 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin">
     <path d="M2.776 5.106L3.648 11h12.736l.867-5.98-3.493 3.02-3.755-4.827-3.909 4.811-3.318-2.918zm10.038-1.537l-.078.067.141.014 1.167 1.499 1.437-1.242.14.014-.062-.082 2.413-2.086a1 1 0 0 1 1.643.9L18.115 13H1.922L.399 2.7a1 1 0 0 1 1.65-.898L4.35 3.827l-.05.06.109-.008 1.444 1.27 1.212-1.493.109-.009-.06-.052L9.245.976a1 1 0 0 1 1.565.017l2.005 2.576zM2 14h16v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
    </svg>
    Leaderboard
   </Header1>
   <div className="mx-auto flex w-full items-center justify-start overflow-auto">
    <Block className="mt-4 w-full">
     <EmbedSkeleton />
    </Block>
   </div>
  </>
 );
}
