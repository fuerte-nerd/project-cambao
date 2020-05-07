import React from "react"
import { Typography } from "@material-ui/core"

import DogProfileExpansionPanel from "./DogProfileExpansionPanel"

const DogProfileDescription = () => {
  return (
    <DogProfileExpansionPanel title="Description" headingVariant="h6" expanded>
      <Typography variant="subtitle1" align="justify">
        Lorem a dolor possimus minus magnam? Magnam modi at alias exercitationem
        temporibus? Accusamus laudantium nihil dolores blanditiis numquam Optio
        corporis neque tenetur quam animi a Assumenda atque quisquam asperiores
        quae deleniti. Repellat dolor voluptate iure tempore laborum Ex quasi
        consectetur cupiditate illum nihil eius Voluptate laborum ipsum minus
        dolorem dolore.\n\n Adipisicing ad nobis debitis eius velit Cum expedita
        nostrum quidem delectus quo id Id tempora beatae id soluta error? Odio
        in et expedita aperiam quas velit Vitae facere reiciendis accusamus
        consequatur eos distinctio! Officia sunt debitis voluptate accusantium
        recusandae Quisquam ratione accusamus placeat animi ex fuga? Veritatis
        velit earum nulla!
      </Typography>
    </DogProfileExpansionPanel>
  )
}

export default DogProfileDescription
