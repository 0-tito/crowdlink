import { useForm } from "react-hook-form"; // manages form state.
//  (values, errors, touched state, submit handlers, etc.)
import { zodResolver } from "@hookform/resolvers/zod"; // connects zod with react form hook
import { z } from "zod";  //defines schema
import web3 from "../../web3";
import { number } from "zod/v4-mini";

function campaignSchema(initialContribution){
     return z.object({
  minimumContribution: z.coerce.number().superRefine((value,ctx) => {
    console.log("ctx:",ctx)
    if(!!Number.isNaN(value)){
        ctx.addIssue({
            code: z.ZodIssueCode.custom, 
            message: `invalid input, Expected input is number`
        })
    }
    if(value <= 0){
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "you need to input some amount of ether"
        })
    }
  }),
  
})
}

export default function useCampaignForm(contribution = 0) {
  const schema = campaignSchema(contribution)
   return useForm({
    resolver:zodResolver(schema)
   })
}