import { toast } from "react-toastify"

export function PackageLayout(props){
    toast.success("welcome");
    toast.warning("warning");
    toast.error("error")
    toast.info("info")
    return(
        <>
        <div> 
            
            <h4>
            PACKAGES/PLANS
            </h4>
            </div>
        </>
    )
}