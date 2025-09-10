
import {Box, Heading, Link, Stack, Text} from "@chakra-ui/react";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <Link href="./character-selection-cardinal">
                    <Box
                        p="4"
                        borderWidth="1px"
                        borderColor="border.disabled"
                        color="fg.disabled"
                    >
                        <Stack mt="6">
                            <Heading size="md" className="border-bottom-1">キャラ選定カーディナル</Heading>
                            <Text>原神で秘境行く際に、キャラ選択に迷うあなたへ。</Text>
                        </Stack>
                    </Box>
                </Link>

            </div>

        </main>
    );
}