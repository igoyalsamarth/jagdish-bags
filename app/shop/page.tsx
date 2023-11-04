import CanvasTile from "@/components/canvasTile";
import LaminationTile from "@/components/laminationTile";
import NonWovenTile from "@/components/nonWovenTile";

export default async function Page() {
    return (
        <div className="flex justify-center min-h-[calc(100vh-74px)]">
            <div className='grid grid-cols-12 sm:grid-cols-6 md:grid-cols-6 2xl:w-[1170px] xl:w-[962px] lg:w-[738px] md:w-[451px] sm:w-[95%] py-10 gap-10 h-fit'>
                <NonWovenTile />
                <LaminationTile />
                <CanvasTile />
            </div>
        </div>
    );
}