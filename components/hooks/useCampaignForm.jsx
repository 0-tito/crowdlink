import { useForm } from "react-hook-form"; // manages form state.
//  (values, errors, touched state, submit handlers, etc.)
import { zodResolver } from "@hookform/resolvers/zod"; // connects zod with react form hook
import { z } from "zod";  //defines schema

function campaignSchema(initialContribution){
     return z.object({
  minimumContribution: z.coerce.number().superRefine((value,ctx) => {
    console.log("ctx:",ctx)
    if(value < initialContribution){
        ctx.addIssue({
            code: z.ZodIssueCode.custom, 
            message: `you need to send atleast ${initialContribution} wei`
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