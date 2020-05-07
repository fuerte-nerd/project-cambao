import React from "react"

const DogProfileSummary = () => {
  return (
    <Grid container spacing={smUp ? 8 : 0} alignItems="flex-start">
      <Grid item xs={12} sm={6}>
        <DogProfileRow label="Age" info="11 months" first />
        <DogProfileRow label="Breed" info="German Shepherd" />
        <DogProfileRow label="Sex" info="Female" />
        <DogProfileRow label="Licence required" info="Yes" />
        <DogProfileRow label="Location" info="Shelter" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DogProfileRow
          label="Time in care"
          info="3 months"
          first={smUp ? true : false}
        />
        <DogProfileRow label="Dog-friendly" info="Yes" />
        <DogProfileRow label="Cat-friendly" info="Yes" />
        <DogProfileRow label="Family-friendly" info="Yes" />
        <DogProfileRow label="Sterilized" info="Yes" />
      </Grid>
    </Grid>
  )
}

export default DogProfileSummary
