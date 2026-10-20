<script lang="ts">
  import { PUBLIC_DISCORD_INVITE } from "$app/env/public";
  import { Button } from "#lib/components/ui/button";
  import * as Card from "#lib/components/ui/card";
</script>

<div class="flex min-h-[calc(100vh-3rem)] flex-col items-center justify-center gap-4 px-4 py-8">
  <Card.Root class="mx-auto w-full max-w-md glass bg-transparent">
    <Card.Header>
      <Card.Title>SkyCrypt is undergoing maintenance</Card.Title>
      <Card.Description class="italic">is that a bug on my keyboard?</Card.Description>
    </Card.Header>
    <Card.Content class="flex flex-col gap-4">
      <p>We are currently performing maintenance on SkyCrypt. Please check back later.</p>
      <p>In the meantime, you can join our Discord server for updates</p>
      <p>
        <Button href={PUBLIC_DISCORD_INVITE} target="_blank" rel="noopener noreferrer" class="w-full">
          Join Discord
        </Button>
      </p>
    </Card.Content>
  </Card.Root>
</div>
