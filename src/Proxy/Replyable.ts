export default interface Replyable {
  reply(): Promise<string>
}
