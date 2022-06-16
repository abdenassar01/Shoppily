import { PageWrapper, Model, ErrorMessage, Image, 
    BigHeading, MeduimHeading, SmalHeading,
    StyledPrimaryLink
} from "./SubComponents"

const Error404 = () => {
  return (
    <PageWrapper>
        <Model>
            <Image src="https://i.imgur.com/tDB9FPy.png" alt="man shocked" draggable={false} />
            <ErrorMessage>
                <BigHeading>Ooops!</BigHeading>
                <MeduimHeading>We can't seem to find the page you're looking for.</MeduimHeading>
                <SmalHeading>Error code: {404}</SmalHeading>
                <StyledPrimaryLink to="/">
                    Back To Home Page
                </StyledPrimaryLink>
            </ErrorMessage>
        </Model>
    </PageWrapper>
  )
}

export default Error404