import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useSubmitContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      name: string;
      phone: string;
      email: string | null;
      message: string;
    }) => {
      if (!actor) throw new Error('Actor not available');
      await actor.submitContactForm(data.name, data.phone, data.email, data.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contactSubmissions'] });
    }
  });
}

export function useGetContactSubmissions() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['contactSubmissions'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getContactFormSubmissions();
    },
    enabled: !!actor && !isFetching
  });
}
